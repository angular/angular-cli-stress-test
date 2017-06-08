/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1252Component } from './comp-1252.component';

describe('Comp1252Component', () => {
  let component: Comp1252Component;
  let fixture: ComponentFixture<Comp1252Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1252Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1252Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
