/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1555Component } from './comp-1555.component';

describe('Comp1555Component', () => {
  let component: Comp1555Component;
  let fixture: ComponentFixture<Comp1555Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1555Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1555Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
