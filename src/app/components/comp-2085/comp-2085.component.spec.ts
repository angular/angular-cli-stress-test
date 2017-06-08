/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2085Component } from './comp-2085.component';

describe('Comp2085Component', () => {
  let component: Comp2085Component;
  let fixture: ComponentFixture<Comp2085Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2085Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2085Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
