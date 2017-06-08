/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1479Component } from './comp-1479.component';

describe('Comp1479Component', () => {
  let component: Comp1479Component;
  let fixture: ComponentFixture<Comp1479Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1479Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1479Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
