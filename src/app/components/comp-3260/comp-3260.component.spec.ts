/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3260Component } from './comp-3260.component';

describe('Comp3260Component', () => {
  let component: Comp3260Component;
  let fixture: ComponentFixture<Comp3260Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3260Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3260Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
