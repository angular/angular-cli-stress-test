/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4486Component } from './comp-4486.component';

describe('Comp4486Component', () => {
  let component: Comp4486Component;
  let fixture: ComponentFixture<Comp4486Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4486Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4486Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
