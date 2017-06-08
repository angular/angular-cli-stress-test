/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp513Component } from './comp-513.component';

describe('Comp513Component', () => {
  let component: Comp513Component;
  let fixture: ComponentFixture<Comp513Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp513Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp513Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
