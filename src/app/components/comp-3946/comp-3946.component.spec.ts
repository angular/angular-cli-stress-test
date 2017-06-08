/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3946Component } from './comp-3946.component';

describe('Comp3946Component', () => {
  let component: Comp3946Component;
  let fixture: ComponentFixture<Comp3946Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3946Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3946Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
