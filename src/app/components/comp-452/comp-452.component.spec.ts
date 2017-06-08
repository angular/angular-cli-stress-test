/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp452Component } from './comp-452.component';

describe('Comp452Component', () => {
  let component: Comp452Component;
  let fixture: ComponentFixture<Comp452Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp452Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp452Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
