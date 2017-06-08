/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp499Component } from './comp-499.component';

describe('Comp499Component', () => {
  let component: Comp499Component;
  let fixture: ComponentFixture<Comp499Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp499Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp499Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
