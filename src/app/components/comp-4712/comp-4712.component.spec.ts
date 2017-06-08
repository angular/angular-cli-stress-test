/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4712Component } from './comp-4712.component';

describe('Comp4712Component', () => {
  let component: Comp4712Component;
  let fixture: ComponentFixture<Comp4712Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4712Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4712Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
