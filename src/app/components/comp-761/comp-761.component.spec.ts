/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp761Component } from './comp-761.component';

describe('Comp761Component', () => {
  let component: Comp761Component;
  let fixture: ComponentFixture<Comp761Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp761Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp761Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
