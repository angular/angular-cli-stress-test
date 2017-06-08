/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4977Component } from './comp-4977.component';

describe('Comp4977Component', () => {
  let component: Comp4977Component;
  let fixture: ComponentFixture<Comp4977Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4977Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4977Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
