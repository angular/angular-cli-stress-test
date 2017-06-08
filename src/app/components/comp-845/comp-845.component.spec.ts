/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp845Component } from './comp-845.component';

describe('Comp845Component', () => {
  let component: Comp845Component;
  let fixture: ComponentFixture<Comp845Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp845Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp845Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
