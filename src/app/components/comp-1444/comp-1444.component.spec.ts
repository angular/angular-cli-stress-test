/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1444Component } from './comp-1444.component';

describe('Comp1444Component', () => {
  let component: Comp1444Component;
  let fixture: ComponentFixture<Comp1444Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1444Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1444Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
