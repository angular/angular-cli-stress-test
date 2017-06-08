/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp380Component } from './comp-380.component';

describe('Comp380Component', () => {
  let component: Comp380Component;
  let fixture: ComponentFixture<Comp380Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp380Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp380Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
