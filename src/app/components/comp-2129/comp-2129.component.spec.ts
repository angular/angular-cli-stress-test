/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2129Component } from './comp-2129.component';

describe('Comp2129Component', () => {
  let component: Comp2129Component;
  let fixture: ComponentFixture<Comp2129Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2129Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
