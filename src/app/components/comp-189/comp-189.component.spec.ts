/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp189Component } from './comp-189.component';

describe('Comp189Component', () => {
  let component: Comp189Component;
  let fixture: ComponentFixture<Comp189Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp189Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp189Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
