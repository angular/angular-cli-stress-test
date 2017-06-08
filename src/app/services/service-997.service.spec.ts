/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service997Service } from './service-997.service';

describe('Service997Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service997Service]
    });
  });

  it('should ...', inject([Service997Service], (service: Service997Service) => {
    expect(service).toBeTruthy();
  }));
});
