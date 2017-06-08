/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2874Component } from './comp-2874.component';

describe('Comp2874Component', () => {
  let component: Comp2874Component;
  let fixture: ComponentFixture<Comp2874Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2874Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2874Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
