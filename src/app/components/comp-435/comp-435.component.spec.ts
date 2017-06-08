/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp435Component } from './comp-435.component';

describe('Comp435Component', () => {
  let component: Comp435Component;
  let fixture: ComponentFixture<Comp435Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp435Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp435Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
