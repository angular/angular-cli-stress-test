/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1177Component } from './comp-1177.component';

describe('Comp1177Component', () => {
  let component: Comp1177Component;
  let fixture: ComponentFixture<Comp1177Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1177Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
