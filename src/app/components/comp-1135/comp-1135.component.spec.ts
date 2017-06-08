/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1135Component } from './comp-1135.component';

describe('Comp1135Component', () => {
  let component: Comp1135Component;
  let fixture: ComponentFixture<Comp1135Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1135Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
