/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1551Component } from './comp-1551.component';

describe('Comp1551Component', () => {
  let component: Comp1551Component;
  let fixture: ComponentFixture<Comp1551Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1551Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1551Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
