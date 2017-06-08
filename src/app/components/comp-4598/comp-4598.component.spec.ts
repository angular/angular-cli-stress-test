/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4598Component } from './comp-4598.component';

describe('Comp4598Component', () => {
  let component: Comp4598Component;
  let fixture: ComponentFixture<Comp4598Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4598Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4598Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
