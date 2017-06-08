/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service853Service } from './service-853.service';

describe('Service853Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service853Service]
    });
  });

  it('should ...', inject([Service853Service], (service: Service853Service) => {
    expect(service).toBeTruthy();
  }));
});
