/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3837Component } from './comp-3837.component';

describe('Comp3837Component', () => {
  let component: Comp3837Component;
  let fixture: ComponentFixture<Comp3837Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3837Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3837Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
