/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp236Component } from './comp-236.component';

describe('Comp236Component', () => {
  let component: Comp236Component;
  let fixture: ComponentFixture<Comp236Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp236Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp236Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
