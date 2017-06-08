/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4931Component } from './comp-4931.component';

describe('Comp4931Component', () => {
  let component: Comp4931Component;
  let fixture: ComponentFixture<Comp4931Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4931Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4931Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
