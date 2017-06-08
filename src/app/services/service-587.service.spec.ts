/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service587Service } from './service-587.service';

describe('Service587Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service587Service]
    });
  });

  it('should ...', inject([Service587Service], (service: Service587Service) => {
    expect(service).toBeTruthy();
  }));
});
