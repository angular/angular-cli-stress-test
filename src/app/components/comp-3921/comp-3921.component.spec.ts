/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3921Component } from './comp-3921.component';

describe('Comp3921Component', () => {
  let component: Comp3921Component;
  let fixture: ComponentFixture<Comp3921Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3921Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3921Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
