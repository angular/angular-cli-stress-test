/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4839Component } from './comp-4839.component';

describe('Comp4839Component', () => {
  let component: Comp4839Component;
  let fixture: ComponentFixture<Comp4839Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4839Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4839Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
