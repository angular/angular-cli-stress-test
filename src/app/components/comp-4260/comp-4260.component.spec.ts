/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4260Component } from './comp-4260.component';

describe('Comp4260Component', () => {
  let component: Comp4260Component;
  let fixture: ComponentFixture<Comp4260Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4260Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4260Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
