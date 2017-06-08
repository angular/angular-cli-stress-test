/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2543Component } from './comp-2543.component';

describe('Comp2543Component', () => {
  let component: Comp2543Component;
  let fixture: ComponentFixture<Comp2543Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2543Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2543Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
