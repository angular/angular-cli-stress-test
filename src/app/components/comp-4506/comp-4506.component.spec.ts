/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4506Component } from './comp-4506.component';

describe('Comp4506Component', () => {
  let component: Comp4506Component;
  let fixture: ComponentFixture<Comp4506Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4506Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4506Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
