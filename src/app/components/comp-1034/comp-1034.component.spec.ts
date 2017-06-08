/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1034Component } from './comp-1034.component';

describe('Comp1034Component', () => {
  let component: Comp1034Component;
  let fixture: ComponentFixture<Comp1034Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1034Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1034Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
