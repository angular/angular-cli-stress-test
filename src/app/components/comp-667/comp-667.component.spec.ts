/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp667Component } from './comp-667.component';

describe('Comp667Component', () => {
  let component: Comp667Component;
  let fixture: ComponentFixture<Comp667Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp667Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp667Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
