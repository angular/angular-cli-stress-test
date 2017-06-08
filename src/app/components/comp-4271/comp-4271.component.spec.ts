/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4271Component } from './comp-4271.component';

describe('Comp4271Component', () => {
  let component: Comp4271Component;
  let fixture: ComponentFixture<Comp4271Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4271Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4271Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
