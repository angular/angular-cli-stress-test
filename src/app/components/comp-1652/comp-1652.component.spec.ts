/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1652Component } from './comp-1652.component';

describe('Comp1652Component', () => {
  let component: Comp1652Component;
  let fixture: ComponentFixture<Comp1652Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1652Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1652Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
