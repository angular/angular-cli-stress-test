/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1118Component } from './comp-1118.component';

describe('Comp1118Component', () => {
  let component: Comp1118Component;
  let fixture: ComponentFixture<Comp1118Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1118Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1118Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
