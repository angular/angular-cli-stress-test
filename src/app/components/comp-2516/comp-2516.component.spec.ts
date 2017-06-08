/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2516Component } from './comp-2516.component';

describe('Comp2516Component', () => {
  let component: Comp2516Component;
  let fixture: ComponentFixture<Comp2516Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2516Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2516Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
