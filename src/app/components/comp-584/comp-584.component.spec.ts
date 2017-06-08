/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp584Component } from './comp-584.component';

describe('Comp584Component', () => {
  let component: Comp584Component;
  let fixture: ComponentFixture<Comp584Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp584Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp584Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
