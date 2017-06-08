/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1228Component } from './comp-1228.component';

describe('Comp1228Component', () => {
  let component: Comp1228Component;
  let fixture: ComponentFixture<Comp1228Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1228Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1228Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
