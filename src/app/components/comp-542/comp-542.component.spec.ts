/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp542Component } from './comp-542.component';

describe('Comp542Component', () => {
  let component: Comp542Component;
  let fixture: ComponentFixture<Comp542Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp542Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp542Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
