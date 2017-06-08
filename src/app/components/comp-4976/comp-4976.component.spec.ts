/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4976Component } from './comp-4976.component';

describe('Comp4976Component', () => {
  let component: Comp4976Component;
  let fixture: ComponentFixture<Comp4976Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4976Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4976Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
