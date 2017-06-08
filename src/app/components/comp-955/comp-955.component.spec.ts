/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp955Component } from './comp-955.component';

describe('Comp955Component', () => {
  let component: Comp955Component;
  let fixture: ComponentFixture<Comp955Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp955Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp955Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
