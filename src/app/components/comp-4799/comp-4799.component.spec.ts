/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4799Component } from './comp-4799.component';

describe('Comp4799Component', () => {
  let component: Comp4799Component;
  let fixture: ComponentFixture<Comp4799Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4799Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4799Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
