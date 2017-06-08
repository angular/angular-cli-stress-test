/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4333Component } from './comp-4333.component';

describe('Comp4333Component', () => {
  let component: Comp4333Component;
  let fixture: ComponentFixture<Comp4333Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4333Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4333Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
