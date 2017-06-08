/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1421Component } from './comp-1421.component';

describe('Comp1421Component', () => {
  let component: Comp1421Component;
  let fixture: ComponentFixture<Comp1421Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1421Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1421Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
