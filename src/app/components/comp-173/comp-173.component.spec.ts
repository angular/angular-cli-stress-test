/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp173Component } from './comp-173.component';

describe('Comp173Component', () => {
  let component: Comp173Component;
  let fixture: ComponentFixture<Comp173Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp173Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp173Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
