/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4941Component } from './comp-4941.component';

describe('Comp4941Component', () => {
  let component: Comp4941Component;
  let fixture: ComponentFixture<Comp4941Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4941Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4941Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
