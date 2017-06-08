/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp260Component } from './comp-260.component';

describe('Comp260Component', () => {
  let component: Comp260Component;
  let fixture: ComponentFixture<Comp260Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp260Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp260Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
