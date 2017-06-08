/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4655Component } from './comp-4655.component';

describe('Comp4655Component', () => {
  let component: Comp4655Component;
  let fixture: ComponentFixture<Comp4655Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4655Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4655Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
